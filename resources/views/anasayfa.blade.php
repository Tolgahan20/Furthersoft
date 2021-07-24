@extends('layout')

@section('css')
<link rel="stylesheet" href="{{ asset("css/anasayfa.css") }}">
@endsection

@section('title')
Anasayfa
@endsection


@section('body_css')
style="background:linear-gradient(90deg, #141e30 0%,#09213A 100% ) !important;"
@endsection

@section('content')
<div class="container-fluid web d-none d-md-block col-border" style="height: 100vh !important;">
    <canvas id="canvas"></canvas>
</div>

<div class="container-fluid mt-5 pt-5 d-sm-flex justify-content-center align-items-center d-md-none ">
    <div class="pt-5 mt-5" style="margin-top: 9rem !important;">
        <img class="colborderr img-fluid" style="max-width: 100%;" src="../resimler/111.PNG" alt="">

    </div>
</div>

<!-- <section class="mt-5 pt-5 d-flex align-items-center justify-content-center">
    <div class="slider ">
        <ul class="slides-container">
            <li class="slide active">
                <div class="parallax">
                    <p class="text-responsive-header slider-text-hover">Merhaba, Biraz Vaktin Var Mı? <br> <span style="opacity: .4;"> (Yana Kaydır! <i class="fas fa-arrow-circle-right"></i> )</span></p>
                </div>
            </li>
            <li class="slide">
                <div class="parallax">
                    <p class="text-responsive-header">Evlerinizin Akıllı Olmasını...</p>
                </div>
            </li>
            <li class="slide">
                <div class="parallax">
                    <p class="text-responsive-header">İstediğin Yerden Tek Dokunuşla <br>Kontrol Edilebilmeyi...</p>
                </div>
            </li>
            <li class="slide">
                <div class="parallax">
                    <p class="text-responsive-header">Problemleri Evinde Olmadan <br> Çözebilmeyi İster Misin?...</p>
                </div>
            </li>
            <li class="slide">
                <div class="parallax">
                    <p class="text-responsive-header">Cevabın "Evet" İse Devam Et!</p>
                </div>
            </li>

            <li class="slide">
                <div class="parallax">
                    <p class="text-responsive-header">FurtherSoft Home ile Sonoff'un <br> tüm Kıbrıs'taki tek yetkili distribütörü <br> olmayı başardık.</p>
                </div>
            </li>

        </ul>
        <button class="buttons">FurtherSoft Home</button>

</section> -->

<section class="pt-5 mt-5" style="min-height: 100vh;padding-top: 30px !important;">
    <div class="container-fluid mt-5 text-center  mb-5">
        <a class="middle-text mt-5 pt-5 mb-5">
            <h1 class="h1-first ">Bu platformlar için geliştiriyoruz</h1>
        </a>
        <p style="opacity: .5 !important;" class="text-responsive my-5">Tek bir platformda çalışan yazılım, modern işletmelerin tüm ihtiyaçlarını karşılayamaz.<br> Çeşitli platformları kapsayan geniş bir hizmet yelpazesi sunuyoruz</p>
        <div class="container-fluid list_platform d-flex align-items-center justify-content-center mb-5 col-border pt-5 pb-5">
            <div class="row d-md-flex align-items-md-center justify-content-md-center mb-5 pt-5 pb-5">

                <div class="col-lg-4 col-md-6 col-sm-12">
                    <a>
                        <img class="img-fluid" src="../resimler/web.png ">
                    </a>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-12">
                    <a>
                        <img class="img-fluid" src="../resimler/android.png ">
                    </a>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-12">
                    <a>
                        <img class="img-fluid" src="../resimler/iOS.png ">
                    </a>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-12">
                    <a>
                        <img class="img-fluid" src="../resimler/tv.png ">
                    </a>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-12">
                    <a>
                        <img class="img-fluid" style="max-width: 120px !important" src="../resimler/wearables.png ">
                    </a>
                </div>
            </div>

        </div>
    </div>

    <div class="container-fluid text-center">
        <div style="margin-top: 120px !important; ">
            <a class="middle-text mt-5 mb-5">
                <h1 class="h1-first">Kalite odaklı süreçler</h1>
            </a>

            <br>
            <p style="opacity: .5 " class="text-responsive my-5">Dilediğiniz ürünleri en yüksek kalitede sunmak için çalışıyoruz. Bunu başarmak için ise kedni formüllerimizi geliştirdik.</p>
            <div class="container-fluid ">
                <div class="row mt-5 mb-5 d-flex justify-content-center align-items-center col-border pl-5 pr-5 pt-5 pb-5">
                    <div class="col-md-5 pt-5 pb-5 d-flex justify-content-center align-items-center  mt-sm-5">
                        <a class="middle-text h1-first ">
                            <h1 class="h1-first ">Agile Metodoijisi</h1>
                        </a>
                    </div>
                    <div class="col-md-7 pl-5 pr-5 pt-5 pb-5 mt-md-2 d-flex justify-content-center align-items-center">
                        <p class="text-responsive " style="opacity: .7 ">Scrum, Lean, Kanban, TDD - her birinin güçlü kıyafeti var. FurtherSoft'da her proje için en iyi <br> geliştirme metodolojisini seçiyoruz. Müşterilerimiz geliştirme süreci boyunca daima aktif katılımcılardır.</p>
                    </div>
                </div>
                <div class="row d-flex justify-content-center align-items-center col-border px-3 py-3 ">
                    <div class="col-md-5 pl-5 pr-5 pt-5 pb-5  mt-sm-5">
                        <a class="middle-text ">
                            <h1 class="h1-first ">Kanıtlanmış Teknolojiler</h1>
                        </a>
                    </div>
                    <div class="col-md-7 pl-5 pr-5 pt-5 pb-5 mt-md-4 d-flex justify-content-center align-items-center">
                        <p class="text-responsive " style="opacity: .7 ">Uygulamaları korumak ve işletmeleri ve müşterilerini olası tehditlerden korumak için sektördeki en iyi uygulamaları takip ediyoruz. Yalnızca güvenilir, denenmiş ve test edilmiş çerçeveleri ve kütüphaneleri kullanıyoruz.</p>
                    </div>
                </div>
                <div class="row d-flex justify-content-center align-items-center col-border px-4 py-4 ">
                    <div class="col-md-5 pl-5 pr-5 pt-5 pb-5  mt-sm-5">
                        <a class="middle-text ">
                            <h1 class="h1-first ">Modern Mimariler</h1>
                        </a>
                    </div>
                    <div class="col-md-7 pl-5 pr-5 pt-5 pb-5 mt-md-2 d-flex justify-content-center align-items-center">
                        <p class="text-responsive " style="opacity: .7 ">MVP ve MVVM mimari kalıplarını kullanarak uygulamalar yaratıyoruz. Bu şekilde temiz, bakılabilir ve test edilebilir kod yazmayı başarıyoruz.</p>
                    </div>
                </div>
                <div class="row d-flex justify-content-center align-items-center col-border px-4 py-4 ">
                    <div class="col-md-5 pl-5 pr-5 pt-5 pb-5  mt-sm-5 d-flex justify-content-center align-items-center">
                        <a class="middle-text ">
                            <h1 class="h1-first ">Tasarım Prensibleri</h1>
                        </a>
                    </div>
                    <div class="col-md-7 pl-5 pr-5 pt-5 pb-5 mt-md-2 d-flex justify-content-center align-items-center">
                        <p class="text-responsive " style="opacity: .7 ">En iyi yazılım geliştirme ilkelerini kullanıyoruz: SOLID, KISS ve DRY. Bu ilkeler projenizin güvenilir olmasını sağlar ve değişikliklerin maliyetini önemli ölçüde azaltır.</p>
                    </div>
                </div>
                <div class="row d-flex justify-content-center align-items-center col-border px-4 py-4 ">
                    <div class="col-md-5 pl-5 pr-5 pt-5 pb-5  mt-sm-5 d-flex justify-content-center align-items-center">
                        <a class="middle-text ">
                            <h1 class="h1-first ">İteratif Testler</h1>
                        </a>
                    </div>
                    <div class="col-md-7 pl-5 pr-5 pt-5 pb-5 mt-md-2 d-flex justify-content-center align-items-center">
                        <p class="text-responsive " style="opacity: .7 ">Yazılım ömrünün başlarında çalışan yazılım üretmek için yinelemeli testler yaparız. Proje kullanıcıya ulaşmadan önce tüm hataları gideririz.</p>
                    </div>
                </div>
                <div class="row d-flex justify-content-center align-items-center col-border px-4 py-4 ">
                    <div class="col-md-5 pl-5 pr-5 pt-5 pb-5  mt-sm-5 d-flex justify-content-center align-items-center">
                        <a class="middle-text ">
                            <h1 class="h1-first ">Commit & Clone</h1>
                        </a>
                    </div>
                    <div class="col-md-7 pl-5 pr-5 pt-5 pb-5 mt-md-2 d-flex justify-content-center align-items-center">
                        <p class="text-responsive " style="opacity: .7 ">Yeni projeye başladıktan sonra kodları otomatik olarak birleştirmek için Github ve Bitbucket kullanıyoruz. Bu şekilde, sorunları erken ve kolay bulmamıza ve çözmemize olanak sağlar.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    </div>
    <section class="section my-5" data-bg="black ">
        <div class="container my-5">
            <div class="section__heading text-center my-sm-5">
                <a class="middle-text ">
                    <h2 class="section__title h1-first ">Dağıtılmış sorumluluklar <br>Ortak bir amaç</h2>
                </a>
                <p class="section__intro text-responsive my-5" style="opacity: .5; ">FurtherSoft ekibinin kendi sorumlulukları vardır, hepimiz ortak bir hedefe doğru çalışıyoruz: size işletmeleriniz için en faydalı olan bir yazılım çözümü sunmak...</p>
            </div>
            <div class="goals-scheme ">
                <div class="goals-scheme__item pos1">
                    <h3 class="goals-scheme__item-title mt-md-5 ">Müşteri</h3>
                </div>
                <div class="goals-scheme__item pos2 ">
                    <ul class="goals-scheme__item-list">
                        <li>Bütçe</li>
                        <li>Birikim</li>
                        <li>Kalite istekleri</li>
                        <li>Etki alanı bilgisi</li>
                        <li>Proje geliştirme</li>
                    </ul>
                </div>
                <div class="goals-scheme__item pos3 ">
                    <h3 class="goals-scheme__item-title  mt-md-5 ">Ürün</h3>
                </div>
                <div class="goals-scheme__item pos4 ">
                    <ul class="goals-scheme__item-list ">
                        <li>Tasarım</li>
                        <li>Mimari</li>
                        <li>Bakım</li>
                        <li>Altyapı</li>
                        <li>Geliştirme uzmanlığı</li>
                    </ul>
                </div>
                <div class="goals-scheme__item pos5 ">
                    <h3 class="goals-scheme__item-title  mt-md-5 ">FurtherSoft</h3>
                </div>
            </div>
        </div>
    </section>
    <section class="container-fluid text-center my-5 pt-5 mt-5" style="min-height: 30vh;">
        <a class="middle-text">
            <h1 class="text-responsive-header text-center middle">Modern Platformlar İçin Yazılımlar</h1>
        </a>
        <div class="container-fluid mt-5 pt-5 pb-5">
            <div class="row col-border pt-5 pb-5 mt-5 mb-5">
                <div class="col-sm-6 col-md-2 col-lg-2 ">
                    <div>
                        <img class="img-fluid" src="../resimler/icon-web.svg">
                    </div>
                    <div>
                        <span class="text-responsive text-white font-weight-bold">Web</span>
                    </div>
                </div>
                <div class="col-sm-6 col-md-2 col-lg-2 mt-5 mb-5">
                    <div>
                        <img class="img-fluid" src="../resimler/icon-ios.svg">
                    </div>
                    <div>
                        <span class="text-responsive text-white font-weight-bold">iOS</span>
                    </div>
                </div>
                <div class="col-sm-6 col-md-2 col-lg-2 mt-5 mb-5">
                    <div>
                        <img class="img-fluid" src="../resimler/icon-android.svg">
                    </div>
                    <div>
                        <span class="text-responsive text-white font-weight-bold">Android</span>
                    </div>
                </div>

                <div class="col-sm-6 col-md-2 col-lg-2 mt-5 mb-5">
                    <div>
                        <img class="img-fluid" src="../resimler/icon-wearables.svg">
                    </div>
                    <div>
                        <span class="text-responsive text-white font-weight-bold">Giyilebilir</span>
                    </div>
                </div>
                <div class="col-sm-6 col-md-2 col-lg-2 mt-5 mb-5 ">
                    <div>
                        <img class="img-fluid" src="../resimler/icon-tv.svg">
                    </div>
                    <div>
                        <span class="text-responsive text-white font-weight-bold">TV</span>
                    </div>
                </div>
                <div class="col-sm-6 col-md-2 col-lg-2 mt-5 mb-5">
                    <div>
                        <img class="img-fluid" src="../resimler/icon-iot.svg">
                    </div>
                    <div>
                        <span class="text-responsive text-white font-weight-bold">iOT</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <div class="container my-5 padding-header">
        <div class="text-center my-5">
            <a class="middle-text">
                <h3 class="text-responsive-header  my-sm-5">Kusursuz çözümler sunmaya odaklanmış</h3>

            </a>
            <p class="text-responsive text-center " style="opacity: .5; ">Temiz koda ve son ürünün bakım ve ölçeklenebilirliğine odaklanıyoruz. Ekibimiz size en iyi teknik çözümleri önermek için her zaman mutludur.</p>
        </div>
        <ul class="list list--divider my-5">
            <li class="my-5">
                <ul class="list__row mx-auto ms-auto ">
                    <li class="list__item text-center ">
                        <div class="img-wrap mx-auto d-block ">
                            <img alt=" " class="img " src="../resimler/icon-eff.svg " />
                        </div>
                        <h3 class="title font-weight-bold">Verimli</h3>
                        <hr class="divider ">
                        <p class="text-responsive ">Uygulamanızın sorunsuz ve hızlı çalışması için modern teknoloji yığınını seçtik. Nesnelerimizi ve sınıflarımızı tutarlı bir şekilde adlandırır ve her kod parçasına ayrıntılı yorumlar sunarız.</p>
                    </li>
                    <li class="list__item text-center ">
                        <div class="img-wrap mx-auto d-block ">
                            <img alt=" " class="img " src="../resimler/icon-rel.svg " />
                        </div>
                        <h3 class="title font-weight-bold">Dürüst</h3>
                        <hr class="divider ">
                        <p class="text-responsive ">Kalite Güvence ekibimiz sürekli olarak uzmanlıklarını geliştiriyor, böylece en küçük hataları bile ortadan kaldırabiliriz. İş mantığında ve genel kod tabanında hataları kontrol ediyoruz.</p>
                    </li>
                </ul>
            </li>
            <li class="my-5 ">
                <ul class="list__row ">
                    <li class="list__item text-center ">
                        <div class="img-wrap mx-auto d-block ">
                            <img alt=" " class="img " src="../resimler/icon-secure.svg " />
                        </div>
                        <h3 class="title font-weight-bold">Güvenli</h3>
                        <hr class="divider ">
                        <p class="text-responsive ">Uygulamanızı güvenli hale getirmek için, mobil bankacılık uygulaması veya hassas verileri depolayan HIPAA uyumlu bir tıbbi platform programlıyor olsanız da, çeşitli şifreleme ve protokol türleri kullanırız.</p>
                    </li>
                    <li class="list__item text-center">
                        <div class="img-wrap mx-auto d-block ">
                            <img alt=" " class="img " src="../resimler/icon-main.svg ">
                        </div>
                        <h3 class="title font-weight-bold">Bakımlı</h3>
                        <hr class="divider ">
                        <p class="text-responsive ">Mükemmel bakım ve ölçeklenebilirlik elde etmek için uygulamanızın mimarisini tasarlamak için zamana ve bilgiye yatırım yaparız. Çok katmanlı bir mimari kullanmak, kodun ayrı bölümlerini gerektiği gibi geliştirmemizi sağlar.</p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</section>



<section class="container-fluid text-center ">
    <a class="middle-text">
        <h1 class="text-responsive-header text-center middle">Özel ve Ölçeklenebilir Ekipler</h1>
    </a>
    <div class="container-fluid colborderr">
        <div class="row pt-5 mt-5 mb-5 d-flex justify-content-center align-items-center pt-5 pb-5">
            <div class="col-sm-6 col-md-4 mt-5 mb-5">
                <div>
                    <img class="img-fluid" src="../resimler/icon-agile.svg">
                </div>
                <div class="mt-5 mb-5">
                    <span class="text-responsive text-white font-weight-bold">Agile Teknolojisi</span>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 mt-5 mb-5">
                <div>
                    <img class="img-fluid" src="../resimler/icon-expertise.svg">
                </div>
                <div class="mt-5 mb-5">
                    <span class="text-responsive text-white font-weight-bold">Derin Teknoloji Uzmanlığı</span>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 mt-5 mb-5">
                <div>
                    <img class="img-fluid" src="../resimler/icon-communications.svg">
                </div>
                <div class="mt-5 mb-5">
                    <span class="text-responsive text-white font-weight-bold">Kişisel Taahhüt</span>
                </div>
            </div>
        </div>
        <div class="row pt-5 mt-5 mb-5 d-flex justify-content-center align-items-center">
            <div class="col-sm-6 col-md-4  mt-5 mb-5">
                <div>
                    <img class="img-fluid" src="../resimler/icon-reporting.svg">
                </div>
                <div class="mt-5 mb-5">
                    <span class="text-responsive text-white font-weight-bold">Düzenli Raporlama</span>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 mt-5 mb-5 ">
                <div>
                    <img class="img-fluid" src="../resimler/icon-tracking.svg">
                </div>
                <div class="mt-5 mb-5">
                    <span class="text-responsive text-white font-weight-bold">Zaman Takibi</span>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 mt-5 mb-5 ">
                <div>
                    <img class="img-fluid" src="../resimler/icon-scalability.svg">
                </div>
                <div class="mt-5 mb-5">
                    <span class="text-responsive text-white font-weight-bold">Ölçeklenebilirlik</span>
                </div>
            </div>
        </div>
    </div>

</section>
@endsection


@section('js')
<script src="{{ asset("js/navbar.js") }}"></script>
<script src="{{ asset("js/particles.js") }}"></script>
{{-- <script src="{{ asset("js/slider.js") }}"></script> --}}
<script src="{{ asset("js/genel.js") }}"></script>
@endsection