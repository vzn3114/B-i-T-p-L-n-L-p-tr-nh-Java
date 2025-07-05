package com.fertilitycare.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fertilitycare.backend.DTO.AppointmentStatsDTO;
import com.fertilitycare.backend.entity.Appointment;
import com.fertilitycare.backend.entity.User;
import com.fertilitycare.backend.repository.AppointmentRepository;
import com.fertilitycare.backend.service.AppointmentService;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    private final AppointmentRepository repository;

    public AppointmentServiceImpl(AppointmentRepository repository) {
        this.repository = repository;
    }

    @Override
    public Appointment create(Appointment appointment, User customer) {
        appointment.setCustomer(customer);
        appointment.setStatus("Đang chờ");
        return repository.save(appointment);
    }

    @Override
    public List<Appointment> getByCustomer(User customer) {
        return repository.findByCustomer(customer);
    }

    @Override
    public List<Appointment> getAll() {
        return repository.findAll();
    }

    @Override
    public void cancel(Long id, User customer) {
        Appointment a = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy lịch hẹn"));
        if (!a.getCustomer().getId().equals(customer.getId())) {
            throw new RuntimeException("Không có quyền hủy lịch hẹn này");
        }
        a.setStatus("Đã hủy");
        repository.save(a);
    }

    @Override
    public List<Appointment> getByDoctor(User doctor) {
        return repository.findByDoctor(doctor);
    }

    @Override
    public Appointment updateStatus(Long id, String status, User doctor) {
        Appointment a = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy lịch hẹn"));
        if (!a.getService().getDoctor().getId().equals(doctor.getId())) {
            throw new RuntimeException("Không có quyền cập nhật lịch này");
        }
        a.setStatus(status);
        return repository.save(a);
    }

    @Override
    public void updateStatus(Long appointmentId, String newStatus) {
        Appointment appointment = repository.findById(appointmentId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy lịch hẹn"));
        appointment.setStatus(newStatus);
        repository.save(appointment);

    }

    @Override
    public List<Object[]> getStatisticsByStatus() {
        return repository.countAppointmentsByStatus();
    }

    @Override
    public List<Object[]> getStatisticsByDate() {
        return repository.countAppointmentsByDate();
    }

    @Override
    public void updateDoctorNote(Long appointmentId, String note, User doctor) {
        Appointment appointment = repository.findById(appointmentId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy lịch hẹn"));

        // Kiểm tra quyền: chỉ bác sĩ của lịch hẹn mới được cập nhật
        if (!appointment.getService().getDoctor().getId().equals(doctor.getId())) {
            throw new RuntimeException("Bạn không có quyền cập nhật kết quả khám cho lịch hẹn này");
        }

        appointment.setDoctorNote(note);
        repository.save(appointment);
    }

    @Override
    public List<AppointmentStatsDTO> getStatsByService() {
        return repository.countAppointmentsByService();
    }

}
