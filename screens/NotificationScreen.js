import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import Header from '../components/Header';

export default function NotificationScreen({ navigation }) {
    const notifications = [
        {
            id: '1',
            title:
                'Booking #DRHJ248 - At Learning Center: Monthly Plan - Starter Family (1-Children), 1-2 Days (Monday, Tuesday) has been approved',
            date: '12-Mar-25, 07:26 PM',
        },
        {
            id: '2',
            title:
                'Invoice for booking #DRHJ248 - At Learning Center: Monthly Plan - Starter Family (1-Children), 1-2 Days (Monday, Tuesday) is ready',
            date: '12-Mar-25, 07:26 PM',
        },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity activeOpacity={0.8} style={styles.notificationCard}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationDate}>{item.date}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#A8C539" barStyle="dark-content" />
            <Header
                title="Notifications"
                onBackPress={() => {
                    if (navigation.canGoBack()) {
                        navigation.goBack();
                    } else {
                        navigation.navigate('Main'); // fallback if can't go back
                    }
                }}
                showBack={true}
                showBell={false}
            />
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No notifications available</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    listContent: {
        padding: 16,
    },
    notificationCard: {
        backgroundColor: '#F9F9F9',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        color: '#333333',
    },
    notificationDate: {
        fontSize: 13,
        color: '#777777',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    emptyText: {
        fontSize: 16,
        color: '#999999',
    },
});
