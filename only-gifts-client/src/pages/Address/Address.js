import React, { useState,useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import AddressCard from '../../components/AddressCard/AddressCard'
import { zipCodeInfo,addAddress,getAddresses } from '../../api/AddressAPI';
import { createNotification } from '../../services/notifications';


var token = localStorage.getItem("token");
var userId = localStorage.getItem("userId");
const Address = () => {
    const [addresses, setAddress] = useState([]);
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)

    useEffect(() => {

        getAddresses({userId:userId},token).then(res => {
            var addresses = [];
            if (res) {
                addresses = res.data.addressList;
            }
            setAddress(addresses);
            console.log(addresses);
        }).catch(err => {
            console.log(err);
        });

    }, [])

    const getInfoByZipCode = async () => {
        var zipCode = document.getElementById('addZipCode').value;
        var response = null;
        if (zipCode != '')
            response = await zipCodeInfo(zipCode);
        console.log(response);
        if (response.status === 200) {
            document.getElementById('containerState').classList.remove('d-none');
            document.getElementById('addState').value = response.data.estado;
            document.getElementById('cityState').classList.remove('d-none');
            document.getElementById('addCity').value = response.data.municipio;
            document.getElementById('containerSuburb').classList.remove('d-none');
            var sel = document.getElementById('addSuburb');
            for(var i=0;i<response.data.colonias.length;i++) {
                var opt = document.createElement('option');
                opt.innerHTML = response.data.colonias[i];
                opt.value = response.data.colonias[i];
                sel.appendChild(opt);
            }
        }
    };

    const createAddress = async () => {
        var e = document.getElementById("addSuburb");
        const addressData = {
            userId:userId,
            country:document.getElementById("country").value,
            name:document.getElementById("name").value +" "+document.getElementById("surname").value,
            streetNumber:document.getElementById("streetNumber").value,
            postalCode:document.getElementById("addZipCode").value,
            state:document.getElementById("addState").value,
            city:document.getElementById("addCity").value,
            suburb:e.options[e.selectedIndex].text,
            phone:document.getElementById("phone").value,
            additionalInstruction:""
        };
        await addAddress(addressData,token).then((response) => {
            if(response.status===201) {
                createNotification(200, "Dirección agregada correctamente.", true, "/address");
                setModal(false);
            }
        })
    }

    return (
        <>
            <NavBar />
            <div className="col-12 container" >
                <div className="col-12 title">
                    <h3>Mis direcciones</h3>
                    <hr />
                </div>
                <div className='col-12 mb-3 text-start'>
                    <button className="btn btn-outline-secondary" id="bttAddAddress" style={{ maxWidth: "12rem" }} onClick={() => { setModal(true) }}>
                        <FontAwesomeIcon icon={faAdd} style={{ marginRight: ".3rem" }} />
                        Agregar dirección
                    </button>
                </div>
                <div className="col-12" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "0 0 16px 16px" }}>

                    <div className="row">

                        <div className="col-12" style={{ overflowY: "scroll", height: "40rem", padding: "1rem" }}>
                            {addresses ? addresses.map((item) => (
                                <AddressCard key={item.addressId} data={item} modal={setModal2} />
                            )) : console.log(addresses)}
                        </div>

                    </div>

                </div>
            </div>

            {
                modal &&
                <div className="modal " style={{ display: "block", backgroundColor: "rgba(1,1,1,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" >
                            <div className="modal-header">
                                <h5 className="modal-title">Agregar una nueva direcci&oacute;n</h5>
                                <button type="button" onClick={() => { setModal(false) }} className="btn-close" aria-label="Close">
                                    <span aria-hidden="true"></span>
                                </button>
                            </div>
                            <div className="modal-body" style={{ overflowY: "scroll", minHeight: "30rem", maxHeight: "30rem", backgroundColor: "whitesmoke", }}>
                                    <div className="mb-2">
                                        <label className="form-label">Pa&iacute;s</label>
                                        <input type="text" id="country" className="form-control" value={"México"} placeholder="Disabled input" disabled />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Nombre(s)</label>
                                        <input type="text" id='name' className="form-control" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Apellido(s)</label>
                                        <input type="text" id='surname' className="form-control" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Calle y n&uacute;mero</label>
                                        <input type="text" id='streetNumber' className="form-control" />
                                    </div>
                                    <div className="mb-2 row">
                                        <label className="form-label">C&oacute;digo postal</label>
                                        <div className="col-7">
                                            <input type="number" className="form-control" id='addZipCode' />
                                        </div>
                                        <div className="col-5" style={{ display: "flex", alignItems: "center" }}>
                                            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => { getInfoByZipCode() }} >Validar c&oacute;digo postal</button>
                                        </div>
                                    </div>
                                    <div className="mb-2 d-none" id='containerState'>
                                        <label className="form-label">Estado</label>
                                        <input type="text" className="form-control" id='addState' />
                                    </div>
                                    <div className="mb-2 d-none" id='cityState'>
                                        <label className="form-label">Ciudad</label>
                                        <input type="text" className="form-control" id='addCity' />
                                    </div>
                                    <div className="mb-2 d-none" id='containerSuburb'>
                                        <label className="form-label">Colonia</label>
                                        <select className="form-select" id='addSuburb'>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">N&uacute;mero de tel&eacute;fono</label>
                                        <input type="number" id='phone' className="form-control" />
                                    </div>
                                    <button onClick={() => {createAddress()}} className="btn btn-outline-success">Agregar direcci&oacute;n</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
                modal2 &&
                <div className="modal " style={{ display: "block", backgroundColor: "rgba(1,1,1,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" >
                            <div className="modal-header">
                                <h5 className="modal-title">Editar direcci&oacute;n</h5>
                                <button type="button" onClick={() => { setModal2(false) }} className="btn-close" aria-label="Close">
                                    <span aria-hidden="true"></span>
                                </button>
                            </div>
                            <div className="modal-body" style={{ overflowY: "scroll", minHeight: "30rem", maxHeight: "30rem", backgroundColor: "whitesmoke", }}>
                                <form>
                                    <div className="mb-2">
                                        <label className="form-label">Pa&iacute;s</label>
                                        <input type="text" id="disabledTextInput" className="form-control" value={"México"} placeholder="Disabled input" disabled />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Nombre(s)</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Apellido(s)</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Calle y n&uacute;mero</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mb-2 row">
                                        <label className="form-label">C&oacute;digo postal</label>
                                        <div className="col-8">
                                            <input type="number" className="form-control" />
                                        </div>
                                        <div className="col-4" style={{ display: "flex", alignItems: "center" }}>
                                            <button type="button" className="btn btn-outline-secondary btn-sm" >Validar c&oacute;postal</button>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Estado</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Ciudad</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Colonia</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">N&uacute;mero de tel&eacute;fono</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-outline-primary">Guardar cambios</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Address;