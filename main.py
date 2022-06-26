from flask import Flask, render_template

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/sas', methods=['GET'])
def sas():
    return 'google.com'

if __name__ == '__main__':
    app.run(debug=True)

