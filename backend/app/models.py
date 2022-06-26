from app import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from hashlib import md5
import json

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    todos = db.relationship('Todo', backref='creator', lazy='dynamic')


    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def avatar(self, size):
        digest = md5(self.email.lower().encode('utf-8')).hexdigest()
        return f'https://gravatar.com/avatar/{digest}?d=identicon&s={size}'

    def get_todos(self):
         return json.dumps(self.todos.filter_by(is_deleted=False).all(), default=Todo.data)

    def data(self):
        return {
            'username': self.username,
            'avatar': self.avatar(50),
            'todos': self.get_todos(),
        }  

    def __repr__(self):
        return f'<User {self.username}>'


class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    is_completed = db.Column(db.Boolean)
    is_deleted = db.Column(db.Boolean)
    name = db.Column(db.String(140))

    def data(self):
        return {
            'id': self.id,
            'name': self.name,
            'is_completed': self.is_completed
        }

    def __repr__(self):
        return f'<Post {self.name}>'

