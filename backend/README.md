# Blog

## Steps to Setup backend locally

* Clone the repository

* `cd` into the repo directory

* Create virtual environment
```python
python3 -m venv venv
```

* Activate virtual environment
```python
source venv/bin/activate
```

* Install requirements
```python
pip install -r requirements.txt
```

* Initialize DB
```python
flask db init
```

* Create Migration
```python
flask db migrate
```

* Apply Migrations
```python
flask db upgrade
```

* Run flask app
```python
flask run
```




