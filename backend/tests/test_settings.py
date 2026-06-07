"""Smoke tests proving the settings machinery works."""

from django.conf import settings


def test_dev_settings_load() -> None:
    assert settings.SECRET_KEY
    assert isinstance(settings.DEBUG, bool)


def test_timezone_is_luxembourg() -> None:
    assert settings.TIME_ZONE == "Europe/Luxembourg"


def test_allowed_hosts_not_empty() -> None:
    assert len(settings.ALLOWED_HOSTS) >= 1
