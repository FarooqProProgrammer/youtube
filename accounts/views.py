from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.forms import UserCreationForm
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token



class RegisterAPIView(APIView):
    def post(self, request, *args, **kwargs):
        # Extract fields from the request data
        username = request.data.get("username")
        password1 = request.data.get("password1")
        password2 = request.data.get("password2")
        email = request.data.get("email")
        
        # Ensure all required fields are provided
        if not username or not password1 or not password2:
            return Response({"error": "Username and both password fields are required"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Ensure passwords match
        if password1 != password2:
            return Response({"error": "Passwords do not match"}, status=status.HTTP_400_BAD_REQUEST)

        # Create a user if passwords match and other validations are correct
        try:
            user = User.objects.create_user(username=username, email=email, password=password1)
            user.save()

            # Return user details without the password
            user_data = {
                "username": user.username,
                "email": user.email,
                "id": user.id
            }
            
            return Response({"message": "User created successfully", "user": user_data}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

class LoginAPIView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        # Authenticate the user
        user = authenticate(username=username, password=password)

        if user:
            # Create or retrieve the token for the authenticated user
            token, created = Token.objects.get_or_create(user=user)

            return Response({'token': token.key}, status=status.HTTP_200_OK)

        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
   
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)