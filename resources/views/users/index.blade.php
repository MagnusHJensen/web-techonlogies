<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>User Index</title>
</head>
<body>
<form action="{{ route('users.print') }}" method="post">
    @csrf
    <label for="firstName">First Name</label>
    <input type="text" id="firstName" name="firstName">
    <label for="lastName">Last Name</label>
    <input type="text" id="lastName" name="lastName">
    <input type="submit">
</form>
</body>
</html>
