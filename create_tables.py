import sqlite3

conn = sqlite3.connect("dashit.db")
cursor = conn.cursor()

# USERS TABLE
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    full_name TEXT,
    phone TEXT,
    address TEXT,
    created_at TEXT
)
""")

# VENDORS TABLE
cursor.execute("""
CREATE TABLE IF NOT EXISTS vendors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    business_name TEXT,
    business_address TEXT,
    description TEXT,
    is_active INTEGER,
    created_at TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
)
""")

conn.commit()
conn.close()

print("Database and tables created successfully")