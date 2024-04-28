import React from 'react';
import khanBountyBoard from '../Resources/BountyBoardResources/BountyBoardResource';
import "./MountKhanBountyBoard.css"

const BountyBoard = () => {
    return (
        <div className="bounty-board">
            <h2>Bounty Board</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Danger Class</th>
                        <th>Enemy Class</th>
                        <th>Location</th>
                        <th>Reward</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {khanBountyBoard.map(bounty => (
                        <tr key={bounty.id} style={{
                            backgroundColor: bounty.completed ? 'palegreen' : 'inherit',
                            color: bounty.completed ? 'black' : 'white'
                        }}>
                            <td>{bounty.name}</td>
                            <td>{'★'.repeat(bounty.dangerClass)}</td>
                            <td>{bounty.enemyClass}</td>
                            <td>{bounty.location}</td>
                            <td>{bounty.reward}</td>
                            <td>{bounty.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BountyBoard;