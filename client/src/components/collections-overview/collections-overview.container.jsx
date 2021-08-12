import {connect} from "react-redux";
import {compose} from "redux";
import {createStructuredSelector} from "reselect";
import {selectCollectionFetching} from "../../redux/shop/shop.selectors";

import WithSpinner from "../with-spiner/with-spiner.component";
import CollectionsOverview from "./collections-overview.component";


const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching
})


const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner)
    (CollectionsOverview);

    export default CollectionsOverviewContainer;


