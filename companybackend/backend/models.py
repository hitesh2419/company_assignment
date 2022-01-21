from django.db import models

# Create your models here.

class Products(models.Model):
    name=models.CharField(max_length=50)
    info=models.TextField()
    price=models.IntegerField(null=True,blank=True)
    id=models.AutoField(primary_key=True,editable=False)
    
    def __str__(self):
        return (self.name)

class Promotion(models.Model):
    promocode=models.CharField(max_length=20)
    promodescription=models.TextField()
    promovalue=models.IntegerField()

    def __str__(self):
        return (self.promocode)
