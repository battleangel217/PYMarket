from django.shortcuts import render, redirect, get_object_or_404
from rest_framework.views import Response, APIView, status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
import uuid
from django.urls import reverse
from .paystack import checkout
from django.contrib import messages



# Create your views here.

class CheckoutView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        transfer_id = f"transfer_{uuid.uuid4()}"

        payment_success_url = reverse('http://127.0.0.1:5501/frontend/wallet.html')
        callback_url = f"{request.scheme}://{request.get_host()}{payment_success_url}"

        checkout_data = {
            "email": request.user.email,
            "amount": int(request.data['amount']),  # convert to kobo
            "currency": "NGN",
            "channels": ["card", "bank_transfer", "bank", "ussd", "qr", "mobile_money"],
            "reference": request.user.id,
            "callback_url": callback_url,
            "metadata": {
                "user_id": request.user.id,
                "purchase_id": transfer_id,
            },
            "label": f"Transfer For {request.user.username}",
        }

        status, checkout_url_or_error = checkout(checkout_data)

        if status:
            return redirect(checkout_url_or_error)
        else:
            messages.error(request, checkout_url_or_error)
            return redirect('Pricing')