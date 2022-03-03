
import styles from "../../css/AddReview.module.css";

export const AddReview = () => {
    return (
        <section className={styles.card}>
            <h5>
                Add a review
            </h5>
            <form className={styles.input}>
                <input type="search" />
                <textarea></textarea>
                <button type="submit">Add</button>
            </form>
        </section>
    )
}