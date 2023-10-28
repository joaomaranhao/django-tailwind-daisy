# Django + tailwind + daisyUI

This project is a boilerplate to start a Django project with Tailwind + daisyUI.
It also includes django_browser_reload to reload the browser when a file is changed.
It helps to start a project with a modern UI and a fast development environment.

## Getting Started

### Prerequisites

- Python 3.11
- NodeJS v18.18.2

### Installing

1. Clone this repository
2. Create a virtual environment (python -m venv .venv)
3. Activate the virtual environment (source .venv/bin/activate)
4. Install the requirements (pip install -r requirements.txt)
5. Install the node dependencies (npm install)

### Running

In order to css files to be generated while developing, run the following command:

```
npm run tailwind-watch
```

This will generate the css files in the static folder. And it will watch for changes in the css files.

To run the server, run the following command:

```
cd src
python manage.py runserver
```

### Building

To build the css files, run the following command:

```
npm run tailwind-build
```


## Built With

- [Django](https://www.djangoproject.com/) - The web framework used
- [daisyUI](https://daisyui.com/) - The UI framework used