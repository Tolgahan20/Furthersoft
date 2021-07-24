@extends('layout')

@section('css')
<link rel="stylesheet" href="{{ asset("css/hakkimizda.css") }}">
@endsection

@section('title')
Hakkımızda
@endsection


@section('body_css')
style="background:linear-gradient(90deg, #141e30 0%,#09213A 100% ) !important;"
@endsection

@section('content')
<section class="pt-5 mt-5" style="min-height: 100vh;padding-top: 30px !important;">
    <div class="container text-center my-5 pt-5 ">
        <a class="middle-text">
            <h1 class="h1-first ">Biz Kimiz?</h1>
        </a>
        <p class="px-3 text-responsive" style="opacity: .8;"> Biz FurtherSoft olarak bir örgütüz, çeşitli platformlar için yazılımlar geliştiriyoruz. Çözümlerimiz, işinizin ve müşterilerimizin ihtiyaçlarını en iyi şekilde karşılamakla kalmıyor, her gün büyüyerek gücümüze güç katıyoruz. Yaptığımız ihtiyaç
            analizleri, proje yönetimi ve kalite güvencesi ile Android, iOS ve Web Geliştirme hizmetleri sunuyoruz. İhtiyaçlarınızdan fazlasını karşılayan ürünlerimizi üretmek için gerekli olan teknolojiye, bilgiye, tecrübeye, genç ve dinamik bir
            ekibe sahibiz.
    </div>
    <div class="container-fluid text-center pt-5">
        <a class="middle-text">
            <h1 class="h1-first my-5">Ekip Arkadaşlarımız</h1>
        </a>

        <section class="team-section">
            <div class="auto-container">
                <div class="row">
                    <!-- Team Block -->
                    <div class="team-block col-lg-3 col-md-6 col-sm-12">
                        <div class="image-box">
                            <figure class="image"><img src="" alt=""></figure>
                            <div class="overlay-box">
                                <div class="text"><strong>Director / Backend Developer</strong></div>
                                <ul class="social-icon d-flex justify-content-center align-items-center">
                                    <li><a href="https://www.instagram.com/mustafa.dilmac/?hl=tr"><span class="fab fa-instagram"></span></a></li>
                                    <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                                    <li><a href="https://cy.linkedin.com/in/mustafa-dilma%C3%A7-436220b4"><span class="fab fa-linkedin-in"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <h4 style="font-size:2.5rem;"><strong>Ekrem YURDAKUL</strong></h4>
                    </div>
                    <div class="team-block col-lg-3 col-md-6 col-sm-12">
                        <div class="image-box">
                            <figure class="image"><img src="" alt=""></figure>
                            <div class="overlay-box">
                                <div class="text"><strong>General Coordinator</strong></div>
                                <ul class="social-icon">
                                    <li><a href="https://www.instagram.com/alkinhalitoglu/?hl=tr"><span class="fab fa-instagram"></span></a></li>
                                    <li><a href="https://www.facebook.com/profile.php?id=100003204407240"><span class="fab fa-facebook-f"></span></a></li>
                                    <li><a href="https://www.linkedin.com/in/alk%C4%B1n-halito%C4%9Flu-b48b36161/"><span class="fab fa-linkedin-in"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <h4 style="font-size:2.5rem;"><strong>Alkın HALİTOĞLU</strong></h4>
                    </div>
                    <div class="team-block col-lg-3 col-md-6 col-sm-12">
                        <div class="image-box">
                            <figure class="image"><img src="" alt=""></figure>
                            <div class="overlay-box">
                                <div class="text"><strong>Director of Frontend Development</strong></div>
                                <ul class="social-icon">
                                    <li><a href="https://www.instagram.com/ekremyurdakull/?hl=tr"><span class="fab fa-instagram"></span></a></li>
                                    <li><a href="https://www.facebook.com/ekrem.yurdakul.7"><span class="fab fa-facebook-f"></span></a></li>
                                    <li><a href="https://tr.linkedin.com/in/ekrem-yurdakul-8387a89b"><span class="fab fa-linkedin-in"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <h4 style="font-size:2.5rem;"><strong>Mustafa DİLMAÇ</strong></h4>
                    </div>
                    <div class="team-block col-lg-3 col-md-6 col-sm-12">
                        <div class="image-box">
                            <figure class="image"><img src="" alt=""></figure>
                            <div class="overlay-box">
                                <div class="text"><strong>Graphics Designer / Animator</strong></div>
                                <ul class="social-icon">
                                    <li><a href="https://www.instagram.com/emr3ks/?hl=tr"><span class="fab fa-instagram"></span></a></li>
                                    <li><a href="https://www.facebook.com/emr3ks"><span class="fab fa-facebook-f"></span></a></li>
                                    <li><a href="https://tr.linkedin.com/in/emre-ku%C5%9F-379ba31b8?trk=people-guest_people_search-card"><span class="fab fa-linkedin-in"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <h4 style="font-size:2.5rem;"><strong>Selin GÜNGEN</strong></h4>
                    </div>
                    <div class="team-block col-lg-3 col-md-6 col-sm-12">
                        <div class="image-box">
                            <figure class="image"><img src="" alt=""></figure>
                            <div class="overlay-box">
                                <div class="text"><strong>Frontend Developer</strong></div>
                                <ul class="social-icon">
                                    <li><a href="https://www.instagram.com/samikcrr/?hl=tr"><span class="fab fa-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <h4 style="font-size:2.5rem;"><strong>Sami KICIR</strong></h4>
                    </div>
                    <div class="team-block col-lg-3 col-md-6 col-sm-12">
                        <div class="image-box">
                            <figure class="image"><img src="" alt=""></figure>
                            <div class="overlay-box">
                                <div class="text"><strong>Full Stack Developer</strong></div>
                                <ul class="social-icon">
                                    <li><a href="https://www.instagram.com/selin.gungen/"><span class="fab fa-instagram"></span></a></li>
                                    <li><a href="https://www.facebook.com/selgungen"><span class="fab fa-facebook-f"></span></a></li>
                                    <li><a href="https://www.linkedin.com/in/selin-g%C3%BCngen-53b016a5/"><span class="fab fa-linkedin-in"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <h4 style="font-size:2.5rem;"><strong>Kaan SERİN</strong></h4>
                    </div>
                    <div class="team-block col-lg-3 col-md-6 col-sm-12">
                        <div class="image-box">
                            <figure class="image"><img src="" alt=""></figure>
                            <div class="overlay-box">
                                <div class="text"><strong>Full Stack Developer</strong></div>
                                <ul class="social-icon">
                                    <li><a href="https://www.instagram.com/selin.gungen/"><span class="fab fa-instagram"></span></a></li>
                                    <li><a href="https://www.facebook.com/selgungen"><span class="fab fa-facebook-f"></span></a></li>
                                    <li><a href="https://www.linkedin.com/in/selin-g%C3%BCngen-53b016a5/"><span class="fab fa-linkedin-in"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <h4 style="font-size:2.5rem;"><strong>Alan SERİN</strong></h4>
                    </div>
                    <div class="team-block col-lg-3 col-md-6 col-sm-12">
                        <div class="image-box">
                            <figure class="image"><img src="" alt=""></figure>
                            <div class="overlay-box">
                                <div class="text"><strong>Full Stack Developer</strong></div>
                                <ul class="social-icon">
                                    <li><a href="https://www.instagram.com/sibel.balkayaa/?hl=tr"><span class="fab fa-instagram"></span></a></li>

                                </ul>
                            </div>
                        </div>
                        <h4 style="font-size:2.5rem;"><strong>Tolgahan DAYANIKLI</strong></h4>
                    </div>
                    <div class="team-block col-lg-3 col-md-6 col-sm-12">
                        <div class="image-box">
                            <figure class="image"><img src="" alt=""></figure>
                            <div class="overlay-box">
                                <div class="text"><strong>Intern</strong></div>
                                <ul class="social-icon">
                                    <li><a href="https://www.instagram.com/sibel.balkayaa/?hl=tr"><span class="fab fa-instagram"></span></a></li>

                                </ul>
                            </div>
                        </div>
                        <h4 style="font-size:2.5rem;"><strong>Ahmet KIRMIZI </strong></h4>
                    </div>
                    <div class="team-block col-lg-3 col-md-6 col-sm-12">
                        <div class="image-box">
                            <figure class="image"><img src="" alt=""></figure>
                            <div class="overlay-box">
                                <div class="text"><strong>Intern</strong></div>
                                <ul class="social-icon d-flex align-items-center justify-content-center">
                                    <li><a href="https://www.instagram.com/sibel.balkayaa/?hl=tr"><span class="fab fa-instagram"></span></a></li>

                                </ul>
                            </div>
                        </div>
                        <h4 style="font-size:2.5rem;"><strong>Arda TÜRKER</strong></h4>
                    </div>


                </div>
            </div>
        </section>
    </div>

    <section class="section text-center">
        <div class="container">
            <div class="section__heading">
                <h2 class="text-responsive-header">Nasıl yazılım geliştiririz</h2>
                <p class="text-responsive" style="opacity: .8;">Daha verimli iş akışları geliştirmek için yazılım geliştirme yaşam döngümüzü sürekli iyileştiriyoruz; daha iyi bir yazılımı daha hızlı yapalım.</p>
            </div>
            <ul class="build-scheme">
                <li class="build-scheme__item build-scheme__item--open">
                    <div class="build-scheme__title-wrap">
                        <div class="build-scheme__block"></div>
                        <h4 class="build-scheme__title text-responsive-header">Planlama</h4>
                    </div>
                    <p class="build-scheme__text text-responsive">Planlama aşamasında, kaliteyi hazırlayabilmemiz için ihtiyaçlarınızı topluyor ve analiz ediyoruz. Zamanında ve bütçe dahilinde çözüm. Daha sonra teknoloji yığınını ve ürün konseptini tanımlamak için kapsamlı araştırmalar yapıyoruz
                        gelecekteki bir uygulama ve bir ürün belgelerini hazırlama şeklinde tanımlanabilir.</p>
                </li>
                <li class="build-scheme__item">
                    <div class="build-scheme__title-wrap">
                        <div class="build-scheme__block"></div>
                        <h4 class="build-scheme__title text-responsive-header">Tasarım</h4>
                    </div>
                    <p class="build-scheme__text text-responsive">Planlama aşamasından sonra elde ettiğimiz çerçevelere dayanarak, sizin için bir ürün prototipi hazırlamaya başlarız. Daha sonra gelecekteki uygulamanızın kullanıcı arayüzünü tasarlarız. Uygulamanızın kullanıcı arayüzü, gerekirse,
                        güçlü markalarla da tamamlanabilir.</p>
                </li>
                <li class="build-scheme__item">
                    <div class="build-scheme__title-wrap">
                        <div class="build-scheme__block"></div>
                        <h4 class="build-scheme__title text-responsive-header">Geliştirme</h4>
                    </div>
                    <p class="build-scheme__text text-responsive">Tasarım ve geliştirme birbirine yakından bağlı olduğu için, bunlar genellikle gelişimi hızlandırmak için aynı anda yapılır. Gelişim, her biri iki hafta süren sprintlerde gerçekleştirilir. Sprintlerde çalışmak kademeli olarak çalışmamızı
                        sağlar size gelişim sonuçlarını gösterir.</p>
                </li>
                <li class="build-scheme__item">
                    <div class="build-scheme__title-wrap">
                        <div class="build-scheme__block"></div>
                        <h4 class="build-scheme__title text-responsive-header">Test</h4>
                    </div>
                    <p class="build-scheme__text text-responsive">Ayrıca, yazılım yaşam döngüsünün başında çalışan bir yazılım üretmek için yinelemeli testler gerçekleştiriyoruz. Sistemdeki tüm hataları, piyasaya sürülmeden önce çözerek en keyifli ve sorunsuz kullanıcı deneyimini sunmaya izin
                        veriyoruz.
                    </p>
                </li>
                <li class="build-scheme__item">
                    <div class="build-scheme__title-wrap">
                        <div class="build-scheme__block"></div>
                        <h4 class="build-scheme__title text-responsive-header">Destek</h4>
                    </div>
                    <p class="build-scheme__text text-responsive">Ayrıca, sizin tarafınızdan belirlenen bir süre için mevcut sürüm sonrası destek hizmetleri de sunuyoruz. Lansmandan sonra bir ürünü desteklemek ve bakımını yapmak, ürün kalitenizi sürekli olarak iyileştirmenizi mümkün kılar Son
                        kullanıcıların ihtiyaçlarını karşılamak için. Geliştirme ekibimiz, performansını etkilemeden ürününüzde hızlı bir şekilde iyileştirmeler yapabilir.</p>
                </li>
            </ul>

        </div>
    </section>



    <div class="container-fluid text-center my-5 pt-5">
        <a class="middle-text ">
            <h1 class="h1-first ">Teknolojilerimiz</h1>
        </a>
        <br>
        <p style="opacity: .5 " class="text-responsive ">Ürettiğimiz ürünleri güçlü bir şekilde genişletebilmek ve ölçeklendirebilmek için modern,<br>güçlü ve kanıtlanmış teknolojiler kullanıyoruz.</p>

        <div class="mb-5 ">
            <div class="container-fluid ">

                <div class="container-fluid " style="margin-bottom: 50px col-border">
                    <h2 class="mt-5 font-weight-normal text-responsive-header " style="opacity: 0.8 ">Mobil</h2>

                    <div class="row ">
                        <div class="col-md-6 mt-5 ">
                            <div>
                                <h1 style="border-bottom: 2px solid white;" class="mb-5 font-weight-normal text-responsive-header">Android</h1>
                            </div>
                            <div class="row ">
                                <div class="col ">
                                    <img class="img-fluid " src="../resimler/kotlin-logo.svg ">
                                    <h4 class="d-block mt-5 font-weight-normal text-responsive ">Kotlin</h4>
                                </div>
                                <div class="col ">
                                    <img class="img-fluid " src="../resimler/java-logo.png ">
                                    <h4 class="d-block mt-4 font-weight-normal text-responsive">Java</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-5 ">
                            <div>
                                <h1 style="border-bottom: 2px solid white;" class="mb-5 font-weight-normal text-responsive-header">iOS</h1>

                            </div>
                            <div class="row ">
                                <div class="col ">
                                    <img class="img-fluid " src="../resimler/flutter-logo.png ">
                                    <h4 class="d-block mt-5 font-weight-normal text-responsive">Flutter</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 class="my-5 font-weight-normal text-responsive-header " style="opacity: 0.7 ">Web</h2>
                <div class="container-fluid col-border pt-5 pb-5">
                    <h1 style="border-bottom: 2px solid white;" class="mb-5 font-weight-normal text-responsive-header">Frontend</h1>

                    <div class="container d-flex justify-content-center ">
                        <div class="container row ">
                            <div class="col-md-3 mt-md-5 pr-md-5 " style="justify-content: space-between !important; ">
                                <img src="../resimler/java-script-logo.png ">
                                <h4 class="d-block mt-5 font-weight-normal text-responsive ">JavaScript</h4>
                            </div>
                            <div class="col-md-3 mt-5 pr-md-5 ">
                                <img src="../resimler/html-5-logo.png ">
                                <h4 class="d-block mt-5 font-weight-normal text-responsive ">HTML5</h4>
                            </div>
                            <div class="col-md-3 mt-5 pr-md-5 ">
                                <img src="../resimler/css-3-logo.png ">
                                <h4 class="d-block mt-5 font-weight-normal text-responsive ">CSS3</h4>
                            </div>
                            <div class="col-md-3 mt-5 pr-md-5 ">
                                <img src="../resimler/angularjs-logo.png ">
                                <h4 class="d-block mt-5 font-weight-normal text-responsive ">Angular</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid my-5 col-border">
                <h1 style="border-bottom: 2px solid white;" class="mb-5 font-weight-normal text-responsive-header">Backend</h1>

                <div class="container-fluid d-flex justify-content-center ">
                    <div class="container-fluid row d-flex justify-content-center align-items-center ">
                        <div class="container-fluid row ">
                            <div class="col-md-3 pr-md-5 " style="justify-content: space-between !important; ">
                                <img src="../resimler/java-logo.png ">
                                <h4 class="d-block mt-5 font-weight-normal subtext-responsive text-responsive">Java</h4>
                            </div>
                            <div class="col-md-3 mt-5 pr-md-5 ">
                                <img style="max-width: 180px " src="../resimler/spring-logo.png ">
                                <h4 class="d-block mt-5 pt-5 font-weight-normal subtext-responsive text-responsive">Spring</h4>
                            </div>
                            <div class="col-md-3 mt-5 pr-md-5 ">
                                <img style="max-width: 150px; " src="../resimler/jsf-logo.png ">
                                <h4 class="d-block mt-5 pt-5 font-weight-normal w-90 subtext-responsive text-responsive">Java Server Faces</h4>
                            </div>
                            <div class="col-md-3 mt-5 pr-md-5 ">
                                <img src="../resimler/jsp.png ">
                                <h4 class="d-block mt-3 font-weight-normal w-90 subtext-responsive text-responsive">Java Server Pages</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="container-fluid my-5 pt-5 pb-5 col-border">
                <h1 style="border-bottom: 2px solid white;" class="mb-5 font-weight-normal text-responsive-header">Veritabanı</h1>

                <div class="d-flex justify-content-center ">
                    <div class="container-fluid row d-flex justify-content-center align-items-center ">
                        <div class="col-md-3 mt-5 " style="justify-content: space-between !important; ">
                            <img src="../resimler/postgresql-logo.png ">
                            <h4 class="d-block mt-5 font-weight-normal mx-md-5 text-responsive">PostgreSQL</h4>
                        </div>
                        <div class="col-md-3 mt-5 ml-5 mr-5 ">
                            <img src="../resimler/mysql-logo.png ">
                            <h4 class="d-block mt-5 font-weight-normal mx-md-5 text-responsive">MySQL</h4>
                        </div>
                        <div class="col-md-3 mt-5 ">
                            <img src="../resimler/elasticsearch-logo.png ">
                            <h4 class="d-block mt-5 font-weight-normal w-90 mx-md-5 text-responsive">Elasticsearch</h4>
                        </div>

                    </div>
                </div>
            </div>
            <div class="container-fluid my-5 col-border">
                <h1 style="border-bottom: 2px solid white;" class="mb-5 font-weight-normal text-responsive-header">Depo</h1>
                <div class="d-flex justify-content-center ">
                    <div class="container-fluid row d-flex justify-content-center align-items-center ">
                        <div class="col-md-3 " style="justify-content: space-between !important; ">
                            <img src="../resimler/bitbucket-logo.png ">
                            <h4 class="d-block mt-5 font-weight-normal text-responsive">Bitbucket</h4>
                        </div>
                        <div class="col-md-3 ml-5 mr-5 ">
                            <img src="../resimler/sourcetree-logo.png ">
                            <h4 class="d-block mt-5 font-weight-normal text-responsive">Sourcetree</h4>
                        </div>
                        <div class="col-md-3 ">
                            <img src="../resimler/github-logo.png ">
                            <h4 class="d-block mt-5 font-weight-normal w-90 text-responsive">GitHub</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>



</section>

</section>
@endsection


@section('js')
<script>
    $("#animative-blocks .build-scheme__title, .build-scheme__block").mouseenter(function() {
        $(".build-scheme__item").removeClass("build-scheme__item--open"), $(this).closest(".build-scheme__item").addClass("build-scheme__item--open")
    })
</script>
<script src="{{ asset("js/navbar.js") }}"></script>
@endsection
<script src="{{ asset("js/genel.js") }}"></script>
