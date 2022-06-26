from app import app, db
from app.forms import LoginForm, RegistrationForm, TodoForm
from flask_login import current_user, login_user, logout_user, login_required
from app.models import Todo, User
from app.response import Response
import json


@app.route('/todo', methods=['POST'])
@login_required
def todo():
    form = TodoForm()
    if form.validate_on_submit():
        todo = Todo(name=form.name.data, user_id=current_user.id, is_completed=False, is_deleted=False)
        db.session.add(todo)
        db.session.commit()
        return Response.success('sucess', {'message': 'Todo added!'})
    else:
       return Response.error(400, json.dumps(form.errors)) 

@app.route('/todos', methods=['GET'])
@login_required
def todos():
    todos = current_user.get_todos()
    return Response.success('success', {'message': 'Your todos.', 'todos': todos})


@app.route('/todo/<int:id>', methods=['PUT'])
@login_required
def complete_todo(id):
    todo = Todo.query.filter_by(id=id).first()
    owner_id = todo.user_id
    if todo and (owner_id == current_user.id):
        todo.is_completed = True
        db.session.add(todo)
        db.session.commit()
        return Response.success('succes', {'message': f'Todo {id} is now completed!'})
    else:
        return Response.error(404, 'Todo not found!')

@app.route('/todo/<int:id>', methods=['DELETE'])
@login_required
def delete_todo(id):
    todo = Todo.query.filter_by(id=id).first()
    owner_id = todo.user_id
    if todo and (owner_id == current_user.id):
        todo.is_deleted = True
        db.session.add(todo)
        db.session.commit()
        return Response.success('succes', {'message': f'Todo {id} is now deleted!'})
    else:
        return Response.error(404, 'Todo not found!')

@app.route('/login', methods=['POST'])
def login():
    if current_user.is_authenticated:
        return Response.success('success', {'message': 'Already logged in!'})
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user is None or not user.check_password(form.password.data):
            return Response.error(400, 'Invalid username or password')
        login_user(user, remember=form.remember_me.data)
        return Response.success('success', {'message': 'Successfully logged in!', 'user': user.data()})
    else:
        return Response.error(400, json.dumps(form.errors))


@app.route('/logout', methods=['GET'])
def logout():
    logout_user()
    return Response.success('success', {'message': 'Successfully logged out!'})


@app.route('/register', methods=['POST'])
def register():
    if current_user.is_authenticated:
        return Response.success('success', {'message': 'Already logged in!'})
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        return Response.success('success', 'Congratulations, you are now a registered user!')
    else:
        return Response.error(400, json.dumps(form.errors))


@app.route('/current-user', methods=['GET'])
def current_user_data():
    if current_user.is_authenticated:
        return current_user.data()
    return {}, 404