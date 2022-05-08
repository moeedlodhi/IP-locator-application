from django.db import models
from django.contrib.auth.models import User
# Create your models here.




class iplog(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True)
    country=models.CharField(max_length=264,null=True,blank=True)
    country_code=models.CharField(max_length=264,null=True,blank=True)
    continent=models.CharField(max_length=264,null=True,blank=True)
    IP=models.CharField(max_length=264,null=True,blank=True)
    region=models.CharField(max_length=264,null=True,blank=True)
    region_code=models.CharField(max_length=264,null=True,blank=True)
    city=models.CharField(max_length=264,null=True,blank=True)

    def __str__(self):
        return self.IP
