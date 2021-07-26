@extends('layout')

@section('css')
<link rel="stylesheet" href="{{ asset("css/iletisim.css") }}">
@endsection

@section('title')
İletişim
@endsection


@section('body_css')
style="background: linear-gradient(90deg, #2c3e50 0%,#3498db 100% );"@endsection

@section('content')
<section class="contact" id="contact">
    <div class="container">
        <div class="heading text-center">
            <h2 class="text-responsive-header font-weight-bold">Bize <span>
                Ulaşın!
            </span>
                <p class="text-white" style="font-size: 3rem; opacity: .7;">Aklınızda bir proje mi var? Bize mesaj gönderin. Ekibimiz bu konu üzerinde çalışacak
                    <br>ve bir sonraki adımı beraber planlayacağız.</p>
        </div>
        <div class="row">
            <div class="col-md-5">
                <div class="title">
                    <h3>İletişim Bilgileri</h3>
                </div>
                <div class="content">
                    <!-- Info-1 -->
                    <div class="info">
                        <i class="icons fas fa-mobile-alt"></i>
                        <h4 class="d-inline-block">TELEFON :
                            <br>
                            <span class="text-white" style="opacity: .7;">+90 533 880 41 41</span></h4>
                    </div>
                    <!-- Info-2 -->
                    <div class="info">
                        <i class="icons far fa-envelope"></i>
                        <h4 class="d-inline-block">EMAIL :
                            <br>
                            <span class="text-white" style="opacity: .7;">info@furtherSoft.com</span></h4>
                    </div>
                    <!-- Info-3 -->
                    <div class="info mb-5 ">
                        <i class="icons fas fa-map-marker-alt"></i>
                        <h4 class="d-inline-block">ADRES :<br>
                            <span class="text-white" style="opacity: .7;">80 Bolu Sokak, Küçükkaymaklı, Lefkoşa</span></h4>
                    </div>
                </div>
            </div>

            <div class="col-md-7">

                <form>
                    <div class="row">
                        <div class="col-sm-6">
                            <input type="text" class="form-control" placeholder="İsim">
                        </div>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" placeholder="Soyisim">
                        </div>
                        <div class="col-sm-12">
                            <input type="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="col-sm-12">
                            <input type="phone" class="form-control" placeholder="Telefon Numarası">
                        </div>

                    </div>

                    <div class="form-group">
                        <textarea class="form-control" rows="5" id="comment" placeholder="Mesaj"></textarea>
                    </div>

                    <div class="d-flex justify-content-center align-items-center">
                        <button class="btn btn" type="submit">Gönder <i class="far fa-paper-plane"></i></button>

                    </div>
                </form>
            </div>
        </div>
    </div>
</section>


</section>
@endsection


@section('js')
<script src="{{ asset("js/navbar.js") }}"></script>
@endsection