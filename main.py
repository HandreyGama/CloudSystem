from flask import Flask, render_template

app = Flask(__name__)
FLASK_PORT = 3000

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True,port=FLASK_PORT)