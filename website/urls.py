"""website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from huala import views as huala_view

urlpatterns = [
    url(r'^$', huala_view.index),
    url(r'^subbody/$', huala_view.sub_body,name="sub_body"),
    url(r'^add2/$',huala_view.add,name='add_single_num'),
    url(r'^old_add/(\d+)/(\d+)/$',huala_view.old_multiple_add),
    url(r'^add/(\d+)/(\d+)/$',huala_view.add_multiple,name='add_multi_num'),
    url(r'^admin/', admin.site.urls),
]
