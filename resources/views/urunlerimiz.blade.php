@extends('layout')

@section('css')
<link rel="stylesheet" href="{{ asset("css/urunlerimiz.css") }}">
@endsection

@section('title')
Ürünlerimiz
@endsection


@section('body_css')
style="background: linear-gradient(90deg, #2c3e50 0%,#3498db 100% );"@endsection

@section('content')

<section class="d-flex justify-content-center align-items-center mt-5 pt-5" style="min-height: 90vh">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-12 d-flex align-items-center justify-content-center">
                <img alt="" class="img-fluid" src="../resimler/pc2.png">
            </div>
            <div class="col-lg-6 col-12 text-lg-left text-center d-flex align-items-center justify-content-center">
                <div>
                    <h1 class="parts-headers-h1 mb-3">YurtHub</h1>
                    <br>
                    <h3 class="parts-headers-h3">Akıllı Yurt Yöneticiniz</h3>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-4">
                                <span class="parts-tags" style="background: #101F2E">FurtherSoft</span>
                            </div>
                            <div class="col-4">
                                <span class="parts-tags" style="background: #101F2E">Responsive</span>
                            </div>
                            <div class="col-4">
                                <span class="parts-tags" style="background: #101F2E">Web</span>
                            </div>
                        </div>
                    </div>
                    <p class="parts-paragraphs">YurtHub ile yurdunuzu bulutlara taşıyoruz. Her an, <br> her yerden yurdunuzun durumunu takip edebilirsiniz. <br> Kullanıcı dostu arayüz tasarımı, kolay ve anlaşılabilir <br> program yapısı ile herkesin kullanabileceği bir program
                        <br> yarattık. YurtHub'ınıza sadece laptop veya masaüstü <br> bilgisayarlardan değil aynı zamanda mobil cihazlardan <br> da ulaşabilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="d-flex justify-content-center align-items-center" style="min-height: 90vh">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-12 order-lg-1 order-2 text-lg-left text-center d-flex align-items-center justify-content-center">
                <div>
                    <h1 class="parts-headers-h1 mb-3">ProtyPos</h1>
                    <br>
                    <h3 class="parts-headers-h3">Cloud Muhasabe Programı</h3>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-4">
                                <span class="parts-tags" style="background: #101F2E">Muhasebe</span>
                            </div>
                            <div class="col-4">
                                <span class="parts-tags" style="background: #101F2E">FurtherSoft</span>
                            </div>
                            <div class="col-4">
                                <span class="parts-tags" style="background: #101F2E">Responsive</span>
                            </div>
                        </div>
                    </div>
                    <p class="parts-paragraphs">Muhasebe işlerinizi bulut güvenliğiyle kavuşturuyoruz. <br> Proty sayesinde muhasebe işlemlerinizi, geçmişinizi <br> rahatlıkla kontrol edecek, yönetecek ve masaüstü, <br> laptop gibi cihazların yanısıra mobil cihazlardan da
                        <br> ulaşabileceğiniz online bir platformda kullanabileceksiniz.
                    </p>
                </div>
            </div>
            <div class="col-lg-6 col-12 order-lg-2 order-1 d-flex align-items-center justify-content-center">
                <img alt="" class="img-fluid" src="../resimler/POS ekran.png">
            </div>
        </div>
    </div>
</section>
<section class="container-fluid text-center mb-5 pb-5">
    <h1 class="text-responsive-header"> Proje Fikriniz mi Var?
    </h1>
    <div class="mt-5 mb-5">
        <a href="{{url('iletisim')}}" target="_blank" class="buttona buttons text-responsive ">Bizimle İletişime Geç</a>
    </div>
</section>
</section>


@endsection


@section('js')
<script src="{{ asset("js/navbar.js") }}"></script>
@endsection