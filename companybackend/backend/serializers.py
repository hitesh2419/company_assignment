from rest_framework import serializers
from backend import models


class ProductSerializers(serializers.ModelSerializer):   
    class Meta:
        model=models.Products
        fields='__all__'


class PromocodeSerializers(serializers.ModelSerializer):   
    class Meta:
        model=models.Promotion
        fields='__all__'