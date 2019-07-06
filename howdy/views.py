from django.views import generic
from .models import Post

# Create your views here.

class HomePageView(generic.TemplateView):
	template_name = 'index.html'

class AboutPageView(generic.TemplateView):
	template_name = 'about.html'

class ContactPageView(generic.TemplateView):
	template_name = 'contact.html'

class DigPageView(generic.TemplateView):
	template_name = 'dig.html'

class PostList(generic.ListView):
	queryset = Post.objects.filter(status=1).order_by('-created_on')
	template_name = 'blog.html'

class PostDetail(generic.DetailView):
	model = Post
	template_name = 'post_detail.html'