from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse


# Create your views here.


def index(request):
    # return HttpResponse(u"欢迎哗啦")
    html = render(request, 'home.html', {'version': '1.0'})
    return html


def sub_body(request):
    key = request.GET['key']
    html = render(request, 'widgets/main_second_body_' + key + '.html', {'version': '1.0'})
    return html


def add(request):
    a = request.GET['a']
    b = request.GET['b']
    c = int(a) + int(b)
    return HttpResponse(str(c))


def old_multiple_add(request, a, b):
    return HttpResponseRedirect(reverse('add_multi_num', args=(a, b)))


def add_multiple(request, a, b):
    c = int(a) + int(b)
    return HttpResponse(str(c))

# def getHtml(request):
