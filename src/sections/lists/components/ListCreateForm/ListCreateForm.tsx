"use client";

import { List } from "@/modules/lists/domain/List";
import { Field, ErrorMessage, Formik } from "formik";
import styles from "./ListCreateForm.module.scss";
import { initialData } from "./validations/initialData";
import validationScheme from "./validations/validations";
import ReusableButton from "@/sections/shared/components/ReusableButton/ReusableButton";
import { MdAddTask } from "react-icons/md";
import { createMoviesList } from "@/modules/lists/application/list";
import repositories from "@/sections/shared/utils/repositories/repositories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

interface Props {
  setOpenModal: (value: boolean) => void;
}

const ListCreateForm = ({ setOpenModal }: Props): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { userSession } = useAppSelector((state) => state.user);

  const handleSubmitForm = async (values: List) => {
    await createMoviesList(
      repositories.lists,
      dispatch,
      userSession.session_id,
      values,
    );
    setOpenModal(false);
  };

  return (
    <Formik
      initialValues={initialData}
      validateScheme={validationScheme}
      onSubmit={handleSubmitForm}
    >
      {({ errors, touched, handleSubmit, isSubmitting, getFieldProps }) => (
        <div className={styles.container}>
          <section className={styles.sectionContainer}>
            <label htmlFor="name" className={styles.inputLabel}>
              Name
            </label>
            <Field
              className={styles.inputText}
              type="text"
              id="name"
              placeholder="Name of the list"
              maxLength={25}
              {...getFieldProps("name")}
            />
            {errors.name && touched.name && (
              <ErrorMessage
                className={styles.errorMessage}
                component="span"
                name={"name"}
              />
            )}
          </section>
          <section className={styles.sectionContainer}>
            <label htmlFor="description" className={styles.inputLabel}>
              Description
            </label>
            <Field
              className={styles.inputText}
              type="text"
              id="description"
              placeholder="Enter a description for the list"
              maxLength={25}
              {...getFieldProps("description")}
            />
            {errors.description && touched.description && (
              <ErrorMessage
                className={styles.errorMessage}
                component="span"
                name="description"
              />
            )}
          </section>
          <ReusableButton
            text="Create list"
            onClick={handleSubmit}
            icon={<MdAddTask />}
            className={styles.button}
          />
        </div>
      )}
    </Formik>
  );
};

export default ListCreateForm;
