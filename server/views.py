from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.contrib import messages

# Create your views here.
def index(request):
    return render (request, 'client/index.html')

def register(request):
    if request.method == 'POST':
        username=request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']

        if password == password2:  
            if User.objects.filter(email=email).exists():
                messages.info(request,'email  already exists')
                return redirect ('register')
            elif User.objects.filter(username=username).exists():
                messages.info(request, 'Username already exists')
                return redirect ('register')
            else:
                user= User.objects.create_user(username=username,email= email, password= password)
                user.save()
                return redirect ('login')
        else:
            messages.info(request, 'passwords are not the smae')
            return redirect('register')
    else:
        return render(request, 'register.html')



def login(request):
    if request.method =='POST':
        username = request.POST['username']
        password = request.POST['password']
        
        user = auth.authenticate(username= username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.info(request, 'Invalid username or password')
            return redirect('login')
    else:
        return render(request, 'login.html')

def logout(request):
    auth.logout(request)
    return redirect('/')

def wintega(request):
    return render(request,'wintega.html')