import sqlite3

conn = sqlite3.connect("dashit.db")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT,
    full_name TEXT,
    phone TEXT,
    address TEXT,
    created_at TEXT
)
""")

conn.commit()
conn.close()