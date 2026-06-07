"""Root URL configuration. API routes are added under /api/v1/ in Step 4."""

from django.contrib import admin
from django.urls import URLPattern, URLResolver, path

urlpatterns: list[URLPattern | URLResolver] = [
    path("admin/", admin.site.urls),
]
