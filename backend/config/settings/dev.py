"""Development settings: permissive defaults so the project runs out of the box."""

from .base import *  # noqa: F403
from .base import env

SECRET_KEY = env("DJANGO_SECRET_KEY", "django-insecure-dev-only-key")

DEBUG = env("DJANGO_DEBUG", "true").lower() == "true"
