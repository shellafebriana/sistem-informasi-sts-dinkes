// Deklarasi (all)
var datarj      = [[],[],[],[],[],[],[],[],[],[],[]];
var datarn      = [[],[],[],[],[],[],[]];
var datajkn     = [[],[],[],[],[],[],[],[]];
var puskesmas, idrajal, idranap, idjkn;
var totalrj, administrasi,tindakan, rajal, dipel, laborat, radiologi, ambulan;
var totalrn, paketri,visite,makmin;
var totaljkn, skrining, jknranap,jknpersalinan,jknambulan;

var allrj       = 0;
var allrn       = 0;
var alljkn      = 0;

// Deklarasi tanggal
var tanggal       = new Date();
var format_tgl    = tanggal.getDate() + "/" + (tanggal.getMonth() + 1) + "/" + tanggal.getFullYear();

// RAWAT JALAN PAGE AREA

    // function input_rajal
    function input_rajal() {
        var i           = 0;
        // input
        puskesmas       = document.getElementById('puskesmas').value;
        administrasi    = Number(document.getElementById('admin').value);
        tindakan        = Number(document.getElementById('tind').value);
        rajal           = Number(document.getElementById('rajal').value);
        dipel           = Number(document.getElementById('dipel').value);
        laborat         = Number(document.getElementById('laborat').value);
        radiologi       = Number(document.getElementById('radiologi').value);
        ambulan         = Number(document.getElementById('ambulan').value);

        // Proses
        idrajal         = puskesmas+i;
        totalrj         = administrasi+tindakan+rajal+dipel+laborat+radiologi+ambulan;
        datarj[0][i]    = idrajal;
        datarj[1][i]    = puskesmas;
        datarj[2][i]    = format_tgl;
        datarj[3][i]    = administrasi;
        datarj[4][i]    = tindakan;
        datarj[5][i]    = rajal;
        datarj[6][i]    = dipel;
        datarj[7][i]    = laborat;
        datarj[8][i]    = radiologi;
        datarj[9][i]    = ambulan;
        datarj[10][i]   = totalrj;

        // Output
        document.getElementById('datarajal').innerHTML += 
        `<tr>
            <td>Puskesmas ${puskesmas}</td>
            <td>${format_tgl}</td>
            <td>Rp. ${totalrj}</td>
            <td>
            <button type="button" class="btn btn-success btn-sm btn-circle ms-1" data-toggle="modal" data-target="#modaldetailrajal${datarj[0][i]}" onclick="detailrajal('${datarj[0][i]}')">
                <i class="fas fa-th-list text-white"></i>
            </button>
            </td>
        </tr>`;

        i++;
        for (let i = 0; i < datarj[10].length; i++) {
            allrj += datarj[10][i];
        }
        document.getElementById('totalrajal').innerHTML =
        `<tr>
            <td></td>
            <td><strong>Total Rawat Jalan</strong></td>
            <td><strong>Rp. ${allrj}</strong></td>
            <td>
            </td>
        </tr>`;
    }

    // function detail rajal
    function detailrajal(id) {
        var detail = datarj[0].indexOf(id);
        document.getElementById('detailrajal').innerHTML += `
        <div class="modal fade" id="modaldetailrajal${datarj[0][detail]}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Detail Data Rawat Jalan</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table>
                        <tr>
                            <td>Tanggal</td>
                            <td>${datarj[2][detail]}</td>
                        </tr>
                        <tr>
                            <td>Puskesmas</td>
                            <td>${datarj[1][detail]}</td>
                        </tr>
                        <tr>
                            <td>Administrasi</td>
                            <td>Rp. ${datarj[3][detail]}</td>
                        </tr>
                        <tr>
                            <td>Tindakan</td>
                            <td>Rp. ${datarj[4][detail]}</td>
                        </tr>
                        <tr>
                            <td>Rawat Jalan</td>
                            <td>Rp. ${datarj[5][detail]}</td>
                        </tr>
                        <tr>
                            <td>Diklat Pelatihan</td>
                            <td>Rp. ${datarj[6][detail]}</td>
                        </tr>
                        <tr>
                            <td>Laborat</td>
                            <td>Rp. ${datarj[7][detail]}</td>
                        </tr>
                        <tr>
                            <td>Radiologi</td>
                            <td>Rp. ${datarj[8][detail]}</td>
                        </tr>
                        <tr>
                            <td>Ambulan</td>
                            <td>Rp. ${datarj[9][detail]}</td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <h6>Total : Rp. ${datarj[10][detail]}</h6>
                </div>
                </div>
            </div>
        </div>
        `;
    }


// RAWAT INAP PAGE AREA

    // function input_ranap
    function input_ranap() {
        
        var i           = 0;
        // Input
        puskesmas       = document.getElementById('puskesmas').value;
        paketri         = Number(document.getElementById('paketri').value);
        visite          = Number(document.getElementById('visite').value);
        makmin          = Number(document.getElementById('makmin').value);

        // Proses 
        totalrn         = paketri+visite+makmin;
        idranap         = puskesmas+i;
        datarn[0][i]    = idranap;
        datarn[1][i]    = puskesmas;
        datarn[2][i]    = format_tgl;
        datarn[3][i]    = paketri;
        datarn[4][i]    = visite;
        datarn[5][i]    = makmin;
        datarn[6][i]    = totalrn;

        for (let i = 0; i < datarn[6].length; i++) {
            allrn = allrn + datarn[6][i]; 
        }

        // Output
        document.getElementById('datari').innerHTML += 
            `<tr>
                <td>Puskesmas ${puskesmas}</td>
                <td>${format_tgl}</td>
                <td>Rp. ${totalrn}</td>
                <td>
                <button type="button" class="btn btn-success btn-sm btn-circle ms-1" data-toggle="modal" data-target="#modaldetailranap${datarn[0][i]}" onclick="detailranap('${datarn[0][i]}')">
                    <i class="fas fa-th-list text-white"></i>
                </button>
                </td>
            </tr>`;
        
        document.getElementById('totalri').innerHTML =
        `<tr>
            <td></td>
            <td><strong>Total Rawat Inap</strong></td>
            <td><strong>Rp. ${allrn}</strong></td>
            <td>
            </td>
        </tr>`;
        i++;
    }

    // function detail ranap
    function detailranap(id) {
        var detail = datarn[0].indexOf(id);
        document.getElementById('detailri').innerHTML += `
        <div class="modal fade" id="modaldetailranap${datarn[0][detail]}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Detail Data Rawat Inap</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table>
                        <tr>
                            <td>Tanggal</td>
                            <td>${datarn[2][detail]}</td>
                        </tr>
                        <tr>
                            <td>Puskesmas</td>
                            <td>${datarn[1][detail]}</td>
                        </tr>
                        <tr>
                            <td>Paket RI</td>
                            <td>Rp. ${datarn[3][detail]}</td>
                        </tr>
                        <tr>
                            <td>Visite</td>
                            <td>Rp. ${datarn[4][detail]}</td>
                        </tr>
                        <tr>
                            <td>Makmin</td>
                            <td>Rp. ${datarn[5][detail]}</td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <h6>Total : Rp. ${datarn[6][detail]}</h6>
                </div>
                </div>
            </div>
        </div>
        `;
    }


// JKN PAGE AREA

    // function input_jk
    function input_jk() {
        
        var i           = 0;
        // input
        puskesmas        = document.getElementById('puskesmas').value;
        skrining         = Number(document.getElementById('skrining').value);
        jknambulan       = Number(document.getElementById('jknambulan').value);
        jknpersalinan    = Number(document.getElementById('jknpersalinan').value);
        jknranap         = Number(document.getElementById('jknranap').value);

        // proses
        totaljkn        = skrining+jknambulan+jknpersalinan+jknranap;
        idjkn           = puskesmas+i;
        datajkn[0][i]   = idjkn;
        datajkn[1][i]   = puskesmas;
        datajkn[2][i]   = format_tgl;
        datajkn[3][i]   = skrining;
        datajkn[4][i]   = jknambulan;
        datajkn[5][i]   = jknpersalinan;
        datajkn[6][i]   = jknranap;
        datajkn[7][i]   = totaljkn;

        for (let i = 0; i < datajkn[7].length; i++) {
            alljkn = alljkn + datajkn[7][i]; 
        }

        // Output
        document.getElementById('datajkn').innerHTML += 
            `<tr>
                <td>Puskesmas ${puskesmas}</td>
                <td>${format_tgl}</td>
                <td>Rp. ${totaljkn}</td>
                <td>
                <button type="button" class="btn btn-success btn-sm btn-circle ms-1" data-toggle="modal" data-target="#modaldetailjkn${datajkn[0][i]}" onclick="detailjkn('${datajkn[0][i]}')">
                    <i class="fas fa-th-list text-white"></i>
                </button>
                </td>
            </tr>`;

        document.getElementById('totaljkn').innerHTML =
        `<tr>
            <td></td>
            <td><strong>Total Rawat Inap</strong></td>
            <td><strong>Rp. ${alljkn}</strong></td>
            <td>
            </td>
        </tr>`;
        i++;
    }

    // function detail jkn
    function detailjkn(id) {
        var detail = datajkn[0].indexOf(id);
        document.getElementById('detailjkn').innerHTML += `
        <div class="modal fade" id="modaldetailjkn${datajkn[0][detail]}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Detail Data Jaminan Kesehatan Nasional</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table>
                        <tr>
                            <td>Tanggal</td>
                            <td>${datajkn[2][detail]}</td>
                        </tr>
                        <tr>
                            <td>Puskesmas</td>
                            <td>${datajkn[1][detail]}</td>
                        </tr>
                        <tr>
                            <td>Skrining Kesehatan</td>
                            <td>Rp. ${datajkn[3][detail]}</td>
                        </tr>
                        <tr>
                            <td>JKN Ambulan</td>
                            <td>Rp. ${datajkn[4][detail]}</td>
                        </tr>
                        <tr>
                            <td>JKN Persalinan</td>
                            <td>Rp. ${datajkn[5][detail]}</td>
                        </tr>
                        <tr>
                            <td>JKN Rawat Jalan</td>
                            <td>Rp. ${datajkn[6][detail]}</td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <h6>Total : Rp. ${datajkn[7][detail]}</h6>
                </div>
                </div>
            </div>
        </div>
        `;
    }