from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from ckeditor_uploader.fields import RichTextUploadingField


STATUS = (
    (0,"Draft"),
    (1,"Publish")
)

class Post(models.Model):

	title = models.CharField(max_length = 100)
	slug = models.SlugField(max_length=200, unique=True)
	content = RichTextUploadingField()
	author = models.ForeignKey(User, on_delete = models.CASCADE)
	status = models.IntegerField(choices=STATUS, default=0)
	created_on = models.DateTimeField(auto_now_add=True)

	class Meta:
		ordering = ['-created_on']

	def __str__(self):
		return self.title