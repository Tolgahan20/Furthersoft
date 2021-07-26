<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!--Linking to CSS Files-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset("css/global.css") }}">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans">
    @yield('css')
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Encode+Sans+Condensed:300,400,700">

    <!--Linking to Font Awesome-->
    <script crossorigin="anonymous" src="https://kit.fontawesome.com/3a82b90854.js"></script>
    <title>FurtherSoft | @yield('title')</title>
</head>

<body @yield('body_css')>

    <nav class="text-white font-weight-bold" style="backdrop-filter: blur(10px);">
        <a class="navbar-brand " href="../anasayfa/anasayfa.html" style="font-size: 25px; padding-left: 10px;">FurtherSoft</a>
        <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links text-white ">
            <li class="nav-item active expand mr-5">
                <a class="middle nav-link" href={{ route("anasayfa") }}>Anasayfa
                    <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item mr-5">
                <a class="middle nav-link" href={{ route("hakkimizda") }}>Hakkımızda</a>
            </li>
            <li class="nav-item mr-5">
                <a class="middle nav-link" href={{ route("urunlerimiz") }}>Ürünlerİmİz</a>
            </li>
            <!-- <li class="nav-item mr-5">
                <a class="middle nav-link" href="#">Blog</a>
            </li> -->
            <li class="nav-item mr-5">
                <a class="middle nav-link" href={{ route("iletisim") }}>İletİşİm</a>
            </li>

        </ul>
    </nav>

    @yield("content")

    <footer>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4 col-sm-12 footer-column">
                    <img style="max-width: 165px" src="../resimler/logo.png">
                </div>
                <div class="col-md-4 col-sm-12 ">
                    <ul class="list-inline social-buttons d-flex justify-content-center align-items-center mt-5">
                        <li class="list-inline-item text-center">
                            <a href="#" target="_blank">
                                <i class="fab fa-twitter mt-4"></i>
                            </a>
                        </li>
                        <li class="list-inline-item text-center">
                            <a href="#" target="_blank">
                                <i class="fab fa-facebook-f mt-4"></i>
                            </a>
                        </li>
                        <li class="list-inline-item text-center">
                            <a href="#" target="_blank">
                                <i class="fab fa-instagram mt-4"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4 col-sm-12 float-md-right text-sm-center mt-3">
                    <span class="copyright quick-links">Copyright &copy; FurtherSoft Inc.
                        <script>document.write(new Date().getFullYear())</script>
                    </span>
                </div>
            </div>
        </div>

    </footer>

</body>
@yield('js')
<script src="https://cdn.jsdelivr.net/npm/glidejs@2/dist/glide.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

</html>