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
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';

export default function RecurringBookingsScreen({ navigation }) {
    const bookings = [
        {
            id: '1',
            title: 'Monthly Plan (1-child) 1-2 Days',
            subtitle: 'At Learning Center, Starts from: 13-Apr-25\nMonday,Tuesday',
            status: 'pending',
        },
        {
            id: '2',
            title: 'Monthly Plan (1-child) 1-2 Days',
            subtitle: 'At Learning Center, Starts from: 13-Mar-25\nMonday,Tuesday',
            status: 'approved',
        },
    ];

    const renderStatusBadge = (status) => {
        const isPending = status === 'pending';
        return (
            <View style={[styles.statusBadge, { backgroundColor: isPending ? '#C9EFFF' : '#FFD6C9' }]}>
                <Text style={[styles.statusText, { color: isPending ? '#00A3FF' : '#FF5A00' }]}>
                    {status}
                </Text>
            </View>
        );
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity activeOpacity={0.8} style={styles.card}>
            <View style={styles.cardTopRow}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                {renderStatusBadge(item.status)}
            </View>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#A8C539" barStyle="dark-content" />
            <Header
                title="Recurring Bookings"
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
                data={bookings}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        backgroundColor: '#A8C539',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    listContent: {
        padding: 16,
    },
    card: {
        backgroundColor: '#FFFFFF',
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
    cardTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        flex: 1,
        marginRight: 8,
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#777777',
    },
    statusBadge: {
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 4,
        alignSelf: 'flex-start',
    },
    statusText: {
        fontSize: 12,
        fontWeight: '600',
    },
});
