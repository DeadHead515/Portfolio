import { Card, Row, Col } from "react-bootstrap";
import React from "react";
import './projectDemo.css';
import Towers from './media/towers.png';
export class ProjectDemo extends React.Component {
    render() {
        return (
            <div className="project-page">
                <div className="project-card">
                    <div className="project-container">
                        <div className="project-photo">
                            <img src={Towers} alt="dog"></img>
                        </div>
                        <div className="project-info">
                            <div className="project-description">
                                Text base game using Linear Data Structures
                            </div>
                            <div className="project-buttons">
                                <button className="project-git-hub">
                                    GIT HUB
                                </button>
                                <div className="code-used">
                                    PHP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
