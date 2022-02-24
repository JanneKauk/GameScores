import styles from '../css/BaseCard.module.css';

interface BaseCardProps {
    gameDetails: {
        id: number;
        title: string;
        Description: string;
        ReleaseDate: Date;
        OverallScore: number | null;
        imagesId: number;
    }
}

export const BaseCard = (props: BaseCardProps) => {


    return (
        <div className={styles.main}>
            <h1>{props.gameDetails.title}</h1>
            <div>Platform:</div>
            <div>Released: {props.gameDetails.ReleaseDate}</div>
            <div>Summary<br/><p>{props.gameDetails.Description}</p></div>
        </div>
    )
}