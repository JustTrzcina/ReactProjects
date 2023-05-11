import { useEffect, useState } from "react";

import styles from "./AvilableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvilableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "firebase-link"
      );
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }
      const data = await response.json();
      const fetchedMealList = [];
      for (const key in data) {
        fetchedMealList.push(data[key]);
      }
      setMeals(fetchedMealList);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setIsError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (isError) {
    return (
      <section className={styles.MealsError}>
        <p>{isError}</p>
      </section>
    );
  }

  const mealList = meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={styles.meals}>
      <Card>{isLoading ? <p>Menu is Loading...</p> : <ul>{mealList}</ul>}</Card>
    </section>
  );
};

export default AvilableMeals;
