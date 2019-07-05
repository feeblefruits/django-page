from . import views
from django.urls import path

urlpatterns = [
	path('', views.HomePageView.as_view()),
    path('about/', views.AboutPageView.as_view()),
    path('contact/', views.ContactPageView.as_view()),
    path('', views.PostList.as_view(), name='home'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
]
