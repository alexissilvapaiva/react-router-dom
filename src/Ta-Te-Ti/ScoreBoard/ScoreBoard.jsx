import './ScoreBoardStyles.css';

export const ScoreBoard = ({scoreX, scoreO}) => (
    <div className="score-board">
        <div>{scoreX}</div>
        <div>{scoreO}</div>
    </div>
)

export default ScoreBoard;