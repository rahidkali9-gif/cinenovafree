import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Initialize Database Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

pool.on('error', (err) => {
  console.error('Unexpected database error:', err);
  process.exit(-1);
});

// Test Database Connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
  } else {
    console.log('✅ Database connected successfully');
  }
});

// Middleware
app.use(helmet());
app.use(cors({
  origin: [
    process.env.FRONTEND_URL,
    process.env.ADMIN_PANEL_URL,
    'http://localhost:3000',
    'http://localhost:3001',
  ],
  credentials: true,
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    message: 'CineNova Free Backend is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// Root API
app.get('/api', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'CineNova Free API v1',
    version: '1.0.0',
    status: 'active',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth',
      movies: '/api/movies',
      series: '/api/series',
      music: '/api/music',
      admin: '/api/admin',
    },
  });
});

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.path,
    method: req.method,
  });
});

// Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    status: err.status || 500,
  });
});

// Start Server
const server = app.listen(PORT, () => {
  console.log('\n================================');
  console.log('🚀 CineNova Free Backend');
  console.log('================================');
  console.log(`📡 Server: http://localhost:${PORT}`);
  console.log(`📚 API: http://localhost:${PORT}/api`);
  console.log(`💚 Health: http://localhost:${PORT}/api/health`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV}`);
  console.log('================================\n');
});

server.on('error', (err: any) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use`);
  } else {
    console.error('❌ Server error:', err);
  }
  process.exit(1);
});

export default app;
export { pool };
