import React, { Component } from 'react';
import "./About.css";

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="title">
                    <h1>
                        About Us
                        </h1>
                </div>

                <div className="text">
                    <h2 className="subtitle">Sobre el proyecto</h2>
                    <p>
                        La idea de este proyecto surgió a raíz del confinamiento de 2020. En marzo, pudimos ver que todo cambiaba drásticamente:
                        nuestra forma de salir, de trabajar e incluso de ir a clase. <br /><br />
                        A día de hoy, muchos estudiantes siguen asistiendo a clase de forma telemática. Para facilitar la comunicación entre alumno y profesor hemos creado la app Hummingbird. <br /><br />
                        Hummingbird se concibe como una agenda escolar 3.0. En ella los profesores pueden encargar tareas a los alumnos y los alumnos, por su parte, pueden plantear dudas o contestar.
                        La principal misión de este proyecto es agilizar la comunicación escolar y, a su vez, dejar constancia de todo.
                    </p>
                    <h2 className="subtitle">¿A quién va dirigido Hummingbird?</h2>
                    <p>
                        Esta primera versión de Hummingbird está pensada especialmente para los alumnos de secundaria. <br />
                        La app ha sido diseñada para que los alumnos puedan registrarse desde primero hasta cuarto de la E.S.O.
                    </p>
                    <h2 className="subtitle">¿En qué se diferencia de otros proyectos?</h2>
                    <p>
                        Hummingbird además de ser un proyecto innovador, está pensado para que sea lo más intuitivo posible. Se ha cuidado cada detalle para que el público al que va destinada esta app pueda familiarizarse
                        lo antes posible gracias a su diseño intuitivo, sencillo y lleno de color.
                    </p>

                    <h2 className="subtitle">Sobre nosotros</h2>
                    <p>
                        Somos una empresa creada en 2020 con sede en Madrid.
                        <p>
                            mail:  contact@hummingbird.com
                        </p>
                    </p>

                </div>
            </div>
        )
    }
}