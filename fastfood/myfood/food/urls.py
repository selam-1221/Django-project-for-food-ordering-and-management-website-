from django.urls import path

from.import views

app_name='food'

urlpatterns=[
    path('pizza',views.pizza,name='pizzas'),
    path('burger',views.burger,name='burgers'),
    path('ethiopianfood',views.ethiopianfood,name='ethiopian foods'),
    path('indianfood',views.indianfood,name='indian foods'),
    path('drink',views.drink,name='drinks'),
    path('order',views.order,name='order'),
    path('success/',views.success,name='success'),
    path('signup/',views.signup,name='signup'),
    path('login/',views.logIn,name='login'),
    path('logout/',views.logOut,name='logout'),
 
 ]