from . import views
from django.urls import path

urlpatterns = [
    path('about/', views.AboutPageView.as_view()),
    path('contact/', views.ContactPageView.as_view()),
    path('', views.HomePageView.as_view()),
    path('dig/', views.DigPageView.as_view()),
    path('blog/', views.PostList.as_view(), name='home'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
]
