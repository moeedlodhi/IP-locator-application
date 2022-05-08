from django.db import models

# Create your models here.

class country(models.Model):
    continent=models.CharField(max_length=264,null=True,blank=True)
    country=models.CharField(max_length=264,null=True,blank=True)
    country_code=models.CharField(max_length=264,null=True,blank=True)

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
