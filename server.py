from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello World'

@app.route('/about')
def about():
    return 'The about page'


if __name__== '__main__':
    app.run()