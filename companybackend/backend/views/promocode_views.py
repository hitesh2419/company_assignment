from rest_framework.views import APIView
from backend import models
from backend.serializers import PromocodeSerializers
from rest_framework.response import Response

class GetPromocode(APIView): 
    def get(self,request):
        promocode=models.Promotion.objects.all()
        response=PromocodeSerializers(promocode,many=True)
        return Response(response.data)