# Database Schema

## Tables

### users
- id UUID PRIMARY KEY
- email VARCHAR UNIQUE
- password_hash VARCHAR
- name VARCHAR
- is_admin BOOLEAN
- created_at TIMESTAMP

### movies
- id UUID PRIMARY KEY
- title VARCHAR
- description TEXT
- poster_url TEXT
- is_premium BOOLEAN
- created_at TIMESTAMP

### categories
- id UUID PRIMARY KEY
- name VARCHAR
- created_at TIMESTAMP

### comments
- id UUID PRIMARY KEY
- movie_id UUID
- user_id UUID
- content TEXT
- created_at TIMESTAMP
