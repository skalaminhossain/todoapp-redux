import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { Remove } from '../redux/actions/action';
import { Update } from '../redux/actions/action';

const Todo = () => {



    const { User_data } = useSelector((state) => state.todoreducers)

    const [showeye, setshoweye] = useState(false)
    const [showeyevalue, setshoweyevalue] = useState("")

    const dispatch = useDispatch()


    const [show, setShow] = useState(false)

    const [update, setUpdate] = useState("")

    const [ind, setInd] = useState("")
    const handleClose = () => setShow(false);

    const handleShow = (ele) => {
        setShow(true)
        setUpdate(ele)
    }
//delete Function
    const remove = (id) => {
        dispatch(Remove(id))

    }
//update function
    const usertask_update = () => {
        dispatch(Update(update , ind))
        handleClose()
    }
    return (
        <div>
            <div className="todo-data col-lg-5 mx-auto mt-2">
                {
                    User_data.map((ele, k) => {
                        return (
                            <>
                                <div className="todo-container mb-2 d-flex justify-content-between align-items-center px-2" key={k} style={{ background: "#dcdde1", borderRadius: "3px", height: "45px" }}>
                                    <li style={{ listStyle: 'none' }}>{ele}</li>
                                    <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
                                        <EditIcon onClick={() => {
                                            handleShow(ele)
                                            setInd(k)
                                        }} style={{ color: "#3c40c6", cursor: "pointer" }} />
                                        <DeleteForeverIcon onClick={() => remove(k)} style={{ color: "red", cursor: "pointer" }} />
                                        <VisibilityIcon onClick={() => {
                                            setshoweye(true)
                                            setshoweyevalue(ele)
                                        }

                                        } style={{ color: "green", cursor: "pointer" }} />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                {/* Read Model */}
                <Modal show={showeye}>
                    <h1 className='text-center'>{showeyevalue}</h1>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setshoweye(false)} >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Update Model */}

                <Modal show={show} onHide={handleClose}>
                    <h3 className='text-center mt-2'>Update Task</h3>
                    <Modal.Header closeButton>
                        <div className='todo col-lg-5 mx-auto d-flex justify-content-between align-items-center'>
                            <input name='task' value={update} onChange={(e) => setUpdate(e.target.value)} className='form-control col-lg-5 mt-2' />
                        </div>
                    </Modal.Header>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => usertask_update()}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    );
};

export default Todo;