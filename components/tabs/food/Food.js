import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { Thumbnail, ListItem, List, Container, Content, Spinner } from "native-base";
import MainHeader from '../../MainHeader';

export default class Food extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.fetchData();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.fetchData();
      }
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
       <Spinner color='black' />
      </View>
    );
  };

  render() {
    return (
      <Container>
        <MainHeader title="Healthy Food" />
      <Content>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <List>
              <ListItem thumbnail>
            <Thumbnail 
            source={require("../../../images/food1.jpg")}
            style={{flex:1, width:null, height:200}}/>
            </ListItem>


            <ListItem Thumbnail>
            <Thumbnail 
            source={require("../../../images/food.jpg")}
            style={{flex:1, width:null, height:200}}/>
            </ListItem>
            </List>
          )}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </Content>
      </Container>
    );
  }
}
