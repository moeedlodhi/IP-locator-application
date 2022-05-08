from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class country(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True)
    continent=models.CharField(max_length=264,null=True,blank=True)
    country=models.CharField(max_length=264,null=True,blank=True)
    country_code=models.CharField(max_length=264,null=True,blank=True)

    class Meta:
        unique_together = ('user', 'country')

    def __str__(self):
        return self.country


class iplog(models.Model):
    country=models.ForeignKey(country,null=True,blank=True,on_delete=models.CASCADE,related_name="countryIP")
    IP=models.CharField(max_length=264,null=True,blank=True)
    region=models.CharField(max_length=264,null=True,blank=True)
    region_code=models.CharField(max_length=264,null=True,blank=True)
    city=models.CharField(max_length=264,null=True,blank=True)

    def __str__(self):
        return self.IP
