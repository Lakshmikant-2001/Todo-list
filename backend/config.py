import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SESSION_COOKIE_SAMESITE = 'None'
    SESSION_COOKIE_SECURE = 'True'
    REMEMBER_COOKIE_SAMESITE = 'None'
    REMEMBER_COOKIE_SECURE = 'True'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
            'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
