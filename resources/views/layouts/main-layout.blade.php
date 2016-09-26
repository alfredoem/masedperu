<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>@yield('title', 'Mased Representaciones')</title>

    <!-- Bootstrap -->
    <link href="{{asset('libs/bootstrap/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('libs/font-awesome/font-awesome.min.css')}}" rel="stylesheet">
    <link href="{{asset('css/app.css')}}" rel="stylesheet">
</head>
<body>

    <div class="container main-container">
        @include('layouts.partials.header')
        @yield('content')
    </div>

    <script src="{{asset('libs/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('libs/bootstrap/bootstrap.min.js')}}"></script>
</body>
</html>